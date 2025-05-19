import { Badge } from "react-bootstrap";

const CommentsList = (props) => {
  // console.log(props);

  return (
    <div>
      {props.comment.map((comment) => (
        <p key={comment._id}>
          {comment.comment} <Badge bg="dark">{comment.rate} </Badge>
        </p>
      ))}
    </div>
  );
};
export default CommentsList;
