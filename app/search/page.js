"use client";

import { generalTopics, subTopics } from "@/data";
import { searchContent } from "@/lib/search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    console.log("searching...");
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const data = searchContent(lowerCaseSearchTerm);
    const ordered = data?.sort((a, b) => b.score - a.score);
    setSearchResult(ordered);
  };
  function findTopicName(link) {
    const matchingTopic = generalTopics.find((topic) => topic.link === link);
    return matchingTopic ? matchingTopic.name : null;
  }
  const search = searchParams.get("q");

  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left">
        Search
      </h1>

      <div className="relative lg:hidden">
        <input
          type="search"
          className="w-full h-[45px] rounded-[80px] px-5 text-white outline-none placeholder:text-white placeholder:opacity-40"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            background: "rgb(237 206 171 / 50%)",
          }}
          placeholder="What are you looking for ?"
        />
        <button
          className="absolute right-0 top-0 h-[45px] transition-all vm-btn-hover duration-[.3s] px-5 rounded-[60px] vm-text-sec"
          style={{
            background: "rgb(80 60 59 / 72%)",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="mt-3">
        <h2>
          Search results
          {/* for &quot;
          <span className="font-bold">{searchTerm} </span>&quot; */}
        </h2>

        <div className="flex flex-col gap-5 mt-3">
          {searchResult.length ? (
            searchResult.map((result, index) => {
              const generalTopic = findTopicName(result.topic);

              const subTopic = subTopics[result.topic].find(
                (topic) => topic.link === result.subTopic
              );

              return (
                <Link
                  href={"/" + result.topic + "/" + result.subTopic}
                  key={index}
                >
                  <div className={`flex flex-col w-full `}>
                    <h3 className="text-lg text-[#edceab86] font-medium">
                      {generalTopic}
                    </h3>
                    <div className="flex justify-between">
                      <p className="ml-5">{subTopic.name}</p>
                      <AiOutlineRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })
          ) : searchTerm === null ? (
            ""
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
