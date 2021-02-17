import routes from "../../Routes";

const Dashboard = ({ history }) => {
  return (
    <p onClick={() => history.push(routes.orders)}>
      Hello There ! it's dashboard
    </p>
  );
};

export default Dashboard;
