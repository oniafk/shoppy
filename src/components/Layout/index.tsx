import Props from "../../interfaces/Layout";

function LayOut(props: Props) {
  return (
    <div className="flex flex-col items-center mt-20 ">{props.children}</div>
  );
}

export { LayOut };
