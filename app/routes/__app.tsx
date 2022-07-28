import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Nav } from "~/components/Nav";
import { authenticator, SessionUser } from "~/services/auth.server";

type LoaderData = {
  user: SessionUser | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};

export default function App() {
  const { user } = useLoaderData<LoaderData>();
  let enhancedUser =
    user == null
      ? undefined
      : {
          ...user,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt),
        };
  return (
    <div className="max-w-6xl mx-4 md:mx-10">
      <Nav user={enhancedUser} />
      <Outlet />
    </div>
  );
}
