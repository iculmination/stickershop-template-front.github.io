// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const User = ({ user }) => {
  // const userIdParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.login === "emptyUser") navigate("/auth");
    // eslint-disable-next-line
  }, []);

  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col pb-6">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
          className="w-20 md:w-24 lg:w-32 p-4 border rounded-full mx-auto m-8"
        />
        <h2 className="mx-auto font-semibold text-2xl md:text-3xl mb-4">
          {user.login}
        </h2>
        <Tabs defaultValue="account" className="w-full mx-auto pl-6 pr-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Login</Label>
                  <Input id="name" defaultValue={user.login} readOnly />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Email</Label>
                  <Input
                    id="username"
                    defaultValue="yourmail@gmail.com"
                    readOnly
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  All your active orders are displayed below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">001</TableCell>
                      <TableCell>In the way</TableCell>
                      <TableCell>12-6-23</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">002</TableCell>
                      <TableCell>Delivered</TableCell>
                      <TableCell>4-22-24</TableCell>
                      <TableCell className="text-right">$210.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">003</TableCell>
                      <TableCell>Delivered</TableCell>
                      <TableCell>4-22-24</TableCell>
                      <TableCell className="text-right">$40.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">004</TableCell>
                      <TableCell>Reserved</TableCell>
                      <TableCell>7-13-24</TableCell>
                      <TableCell className="text-right">$72.50</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="login">Login</Label>
                  <Input id="login" defaultValue={user.login} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="youremail@gmail.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="" placeHolder="Canada" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue=""
                    placeHolder="+ 1-234-56-78-90"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default User;
