import React from "react";
import { useSelector } from "react-redux";
import { selectCurrent } from "../../features/user/userSlice";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";

const Profile = () => {
  const current = useSelector(selectCurrent);

  if (!current) {
    return null;
  }

  const { name, email, avatarUrl, id } = current;
  return (
    <Card className="py-4 w-[320px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Image
          alt="Card profile"
          className="object-cover rounded-xl"
          src={`${BASE_URL}${avatarUrl}`}
          width={370}
        />
      </CardHeader>
      <CardBody>
        <Link to={`/users/${id}`}>
          <h4 className="font-bold text-large mb-2">{name}</h4>
        </Link>
        <p className="text-default-500 flex items-center gap-2">
          <MdAlternateEmail />
          {email}
        </p>
      </CardBody>
    </Card>
  );
};

export default Profile;
