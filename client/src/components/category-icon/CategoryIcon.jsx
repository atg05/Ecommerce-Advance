function CategoryIcon({ title, icon }) {
  return (
    <div className="flex-col gap-4 justify-center">
      <img src={icon} style={{ height: "60px", width: "60px" }} />
      <div className="title flex justify-center" style={{ width: "auto" }}>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default CategoryIcon;
