import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const User = ({ userId }) => {
  // const userIdParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) navigate("/auth");
  }, []);

  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col pb-6">
        {userId}
      </div>
    </section>
  );
};

export default User;
