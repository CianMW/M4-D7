import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";
import { useRef } from "react";

const CommentArea = (props) =>{
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [asin, setAsin] = useState(null)

  useEffect(() => {update()}, [props])
  const update = async () => {
    if (props.asin !== asin) {
      setIsLoading( true
      );
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            props.asin,
          {
            headers: {
              Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzMzNTEzMzYsImV4cCI6MTYzNDU2MDkzNn0.foBYQppbMwHt27xv85g0bJnIlqqfTxEZYvCMtHGy918"

            }
          }
        );
        console.log(response);
        if (response.ok) {
          let newComments = await response.json();
          setComments(newComments);
            setIsLoading( false);
            setIsError(false);
        } else {
          console.log("error");
          setIsLoading( false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading( false);
        setIsError(true);
      }
    }
  };
    return (
      <div>
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
        {console.log("here's the comments taht have been fetched")}{console.log(comments)}
      </div>
    );
}

export default CommentArea;
