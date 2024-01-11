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
  const [records, setRecords] = useState([] as PostType[]);
  console.log(records);
  console.error("error", error);

  useEffect(() => {
    setRecords(data);
  }, []);

  function handleSearch() {
    // do intext searching
    if (!data) return;
    const result = data.filter(p => {
      if (
        p.title.toLowerCase().includes(val.toLowerCase()) ||
        p.user[0].name.toLowerCase().includes(val.toLowerCase())
      ) {
        return p;
      }
    });
    setRecords(() => result);
    console.log("result", records);
  }

  return (
    <>
      <main className="max-w-screen-xl w-full py-4">
        <section className="flex flex-row justify-center">
          <input
            type="search"
            value={val}
            onChange={e => setSearch({ search: e.target.value })}
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
          {error.usersError && error.postsError && <>error</>}
          <div className="flex flex-wrap justify-center gap-5">
            {data &&
              data.slice(35).map((val: PostType) => (
                <div key={val.id} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{val.title}</h2>
                    <h4>Author: {val.user[0].name}</h4>
                    <p>{val.body}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
