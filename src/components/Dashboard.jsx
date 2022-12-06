import TopXbox from "./TopXbox";
import Backlog from "./Backlog";
import TopNintendo from "./TopSwitch";
function Dashboard({ games }) {
  return (
    <>
      <div className="mt-10 dark:bg-gray-800 text-center">
        <h1 className="text-purple-600 text-3xl pt-14 pb-14">
          Welcome to Backlogical!
        </h1>

        <div class="w-full flex justify-center mt-10"></div>
        <h2 className="text-green-300 text-lg">Current Backlog</h2>

        <Backlog />
        <div className="flex justify-center dark:bg-gray-800 h-fit mt-10">
          <TopXbox games={games} />
          {/* </div>
      <div className="dark:bg-gray-800 h-fit"> */}
          <TopNintendo />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
