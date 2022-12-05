import HighestRated from "./HighestRated";
import Backlog from "./Backlog";
function Dashboard() {
  return (
    <div className="mt-10 dark:bg-gray-800 text-center">
      <h1 className="text-purple-600 text-3xl pt-14">
        Welcome to Backlogical!
      </h1>
      <p className="text-green-300">
        The purpose of this site is to help you keep track of that ever growing
        backlog of video games!
      </p>
      <p className="text-red-300">
        You can use the search bar above to search games that are in your
        backlog so that you can track them
      </p>
      <p className="text-blue-300">
        Only you've added the games you, you can then mark them as In Progress,
        Completed or Backlogged!
      </p>
      <p className="text-yellow-300">
        You can also click on a game and see a more detailed view including
        screenshots and trailers
      </p>
      <Backlog />
      <div className="dark:bg-gray-800 h-fit pt-24">
        <HighestRated />;
      </div>
    </div>
  );
}
export default Dashboard;
