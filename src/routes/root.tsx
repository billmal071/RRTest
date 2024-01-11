import React from "react";
import { useState } from "react";
import { articleSchema } from "../validation/article.zod";
import { usePostArticle } from "../hook/article";
import toast from "react-hot-toast";

export default function Root() {
  const [userInfo, setUserInfo] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const { trigger, isMutating } = usePostArticle();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(userInfo, content);
    const validated = await articleSchema.safeParseAsync({
      userInfo,
      content,
    });

    if (!validated.success) {
      setMessage(validated.error.errors[0].message);
      return;
    }
    setMessage("");
    try {
      trigger(validated.data);
      toast.success("Form submitted successfully");
    } catch (err) {
      setMessage(err.response);
      console.error(err);
    }
  }

  return (
    <>
      <section className="flex justify-center items-center flex-col">
        <h3 className="text-2xl font-bold">Create your article</h3>
        <form onSubmit={handleSubmit} className="flex flex-col mt-3 w-[500px]">
          {message && (
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
              <span>Warning: {message} </span>
            </div>
          )}
          <div className="form-control">
            <label htmlFor="userInfo" className="label text-base">
              User info
            </label>
            <input
              name="userInfo"
              type="text"
              value={userInfo}
              onChange={e => setUserInfo(e.target.value)}
              placeholder="Add personal info e.g name, contact information"
              className="input input-bordered w-full"
              required
              min={3}
              max={30}
            />
          </div>
          <br />
          <label htmlFor="content" className="label text-base">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="textarea textarea-bordered"
            required
            minLength={5}
            maxLength={450}
          ></textarea>
          <br />
          <button
            type="submit"
            className="btn btn-md btn-outline btn-success"
            disabled={isMutating}
          >
            {!isMutating ? "submit" : "submitting"}
          </button>
        </form>
      </section>
    </>
  );
}
