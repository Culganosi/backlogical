import Backlog from "./Backlog";
import FormInput from "./FormInput";
import Xbox from "./Xbox";

function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-800 h-screen justify-center items-center font-press-start mt-24">
      <h1 className="text-purple-600 mt-10 text-3xl">
        Welcome to Backlogical!
      </h1>
      <p className="mt-10 text-green-300 w-3/4">
        The purpose of this site is to help you keep track of that ever growing
        backlog of video games!
      </p>
      <p className="text-red-300 w-3/4 mt-10">
        You can use the search bar above to search games that are in your
        backlog so that you can track them
      </p>
      <p className="text-blue-300 w-3/4 mt-10">
        Only you've added the games you, you can then mark them as In Progress,
        Completed or Backlogged!
      </p>
      <p className="text-yellow-300 w-3/4 mt-10">
        You can also click on a game and see a more detailed view including
        screenshots and trailers
      </p>
      <Backlog />
    </div>
  );
}
export default Dashboard;
