'use client';

import {
  NavbarItem,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';

import * as actions from '@/actions';

export default function HeaderAuth() {
  /**
   * This is server side authentication.
   * When we use this server side authentication it directly use the cookies.
   * Because of this, this component will be dynamic component.
   * But problem is this is used in Header component
   * And Header is used inside the main Layout file
   * Because of this, all our route will be dynamic
   * To avoid this, we are using the client side session as bellow
   */
  // const session = await auth();
  const session = useSession(); // This is client side authentication.

  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = null;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session?.data?.user?.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
