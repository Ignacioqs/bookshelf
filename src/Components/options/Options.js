import { useContext } from "react";
import classes from "./options.module.css";
import myContext from "../../Contexts/Context";

const Options = (props) => {
  const ctx = useContext(myContext);

  const handleChange = (e) => {
    const obj = props.book;
    obj.selected = e.target.value;

    ctx.dispatchBookStatus({
      type: "UPDATESTATUS",
      status: e.target.value,
      item: obj,
    });
  };

  const options = [
    { value: "select", label: "select", id: 1 },
    { value: "read", label: "read", id: 2 },
    { value: "wantToRead", label: "want to ", id: 3 },
    { value: "currentlyReading", label: "currently ", id: 4 },
    { value: "favorites", label: "favorites", id: 5 },
    { value: "remove", label: "remove", id: 6 },
  ];

  const selectOptions = options.map((o) => {
    return (
      <option key={o.id} value={o.value}>
        {o.label}
      </option>
    );
  });

  return (
    <select
      onChange={handleChange}
      defaultValue={props.defaultValue}
      className={classes.select}
    >
      {selectOptions}
    </select>
  );
};

export default Options;
