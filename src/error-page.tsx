import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="flex place-content-center py-5">
      <div id="error-page" className="w-100 h-screen">
        <h1 className="text-3xl text-center">Oops!</h1>
        <p className="text-base">Sorry, an unexpected error has occurred.</p>
        <p className="text-red-200 text-center text-lg">
          <i>{error?.statusText || error?.message}</i>
        </p>
        <button className="btn w-100 m-[auto]">
          <Link to="/" className="text-lg">
            Home
          </Link>
        </button>
      </div>
    </section>
  );
}
