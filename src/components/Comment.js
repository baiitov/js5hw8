
import CommentDate from './CommentDate';
import ComponentText from './ComponentText';
import UserInfo from './UserInfo';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <ComponentText date={props.date} text={props.text}/>
     
    </div>
  );
}
export default Comment;