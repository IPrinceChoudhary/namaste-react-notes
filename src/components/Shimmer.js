const Shimmer = () => {
  const shimmerImg =
    "https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY=";
  return (
    <>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="h-[20rem] w-[12rem]" key={index}>
            <img src={shimmerImg} alt="" />
            <h2>
              <img src={shimmerImg} alt="" />
            </h2>
          </div>
        ))}
    </>
  );
};
export default Shimmer;
