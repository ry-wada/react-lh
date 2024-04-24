type Props = {
 title: string;
 isCompleted?: boolean;
 handleClick: () => void;
};
export const Todo: React.FC<Props> = ({ title, isCompleted = false, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {title}
      </p>
    </div>
  );
};