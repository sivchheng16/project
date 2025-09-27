export default function Card(props) {
  const [emoji, title, text] = props;
  return (
    <div>
      <div className="hero-card">
        <div className="lg:p-10 ">
          <div className="text-4xl md:text-5xl pb-6 pt-3 ">{emoji}</div>
          <div>
            <h3 className="font-bold pb-3 md:text-xl"> {title}</h3>
            <p className="text-sm text-gray-300 md:text-[15px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
