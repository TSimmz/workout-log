const Workout = () => {
  return (
    <div className="flex gap-x-3 ">
      <div className="flex flex-col gap-y-2 grow">
        <label>Workout Name</label>
        <input type="text" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label>Weight</label>
        <input type="number" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label>Sets</label>
        <input type="number" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label>Reps</label>
        <input type="number" />
      </div>
    </div>
  );
};

export default Workout;
