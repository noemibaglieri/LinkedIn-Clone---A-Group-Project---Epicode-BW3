import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "./UserProfileCard";
import { getProfileByIdAction } from "../redux/actions";

const ProfilePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myProfileReducer.content);
  const error = useSelector((state) => state.myProfileReducer.error);

  useEffect(() => {
    dispatch(getProfileByIdAction(userId));
  }, [dispatch, userId]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!profile) return <p>Caricamento...</p>;

  return (
    <div className="mt-4">
      <UserProfileCard />
    </div>
  );
};

export default ProfilePage;
