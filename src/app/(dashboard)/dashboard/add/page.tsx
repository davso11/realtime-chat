import AddFriendButton from "@/components/AddFriendButton";
import { FC } from "react";

const page: FC = () => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">
        Ajouter un nouvel ami à vos discussions
      </h1>
      <AddFriendButton />
    </main>
  );
};

export default page;
