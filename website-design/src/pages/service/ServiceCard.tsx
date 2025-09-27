export default function ServiceCard({
  icon,
  title,
  dectiption,
}: {
  [key: string]: any;
}) {
  return (
    <div className="">
      <span className="service-icon">{icon}</span>
      <h1 className="text-xl font-bold py-7 lg:text-3xl">{title}</h1>
      <p className=" text-gray-600 text-sm lg:text-xl ">{dectiption}</p>
    </div>
  );
}
