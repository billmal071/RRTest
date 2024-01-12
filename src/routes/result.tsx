import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useGetResult } from "../hook/results";
import Loader from "../components/loader";
import { PostType } from "../validation/article.zod";
import { useState } from "react";

export default function Result() {
  const [search, setSearch] = useSearchParams({ search: "" });
  const val = search.get("search") ?? "";

  const { data, error, isLoading } = useGetResult();
  const [records, setRecords] = useState<PostType[]>([]);

  useEffect(() => {
    handleSearch();
  }, [data]);

  function handleSearch() {
    // do intext searching
    if (!data) return;
    const result = data.filter((p: PostType) => {
      if (
        p.title.toLowerCase().includes(val.toLowerCase()) ||
        p.user[0].name.toLowerCase().includes(val.toLowerCase())
      ) {
        return p;
      }
    });
    setRecords(() => result);
  }

  return (
    <>
      <main className="max-w-screen-xl w-full py-4">
        <section className="flex flex-row justify-center">
          <input
            type="search"
            value={val}
            onChange={e => setSearch({ search: e.target.value })}
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="search..."
            className="input-md"
            id="search"
          />
          <IconContext.Provider value={{ size: "1.5em" }}>
            <button type="submit" className="btn" onClick={handleSearch}>
              <BsSearch />
            </button>
          </IconContext.Provider>
        </section>
        <br />
        <section className="w-full">
          {!!isLoading && <Loader />}
          {error.usersError && error.postsError && (
            <>
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! Can't show data, try again.</span>
              </div>
            </>
          )}
          <div className="flex flex-wrap justify-center gap-5">
            {records && records.length > 0 ? (
              records.map((val: PostType) => (
                <div key={val.id} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{val.title}</h2>
                    <h4>Author: {val.user[0].name}</h4>
                    <p>{val.body}</p>
                  </div>
                </div>
              ))
            ) : (
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Warning: No data found</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
