import React from "react";
import Avatar from "./avatar";
import DateFormater from "./date-formater";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader: React.FC<Props> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
