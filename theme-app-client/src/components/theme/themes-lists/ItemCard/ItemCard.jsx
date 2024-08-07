import { Link } from "react-router-dom";

function ItemCard(props) {
  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <img
          src={props.theme.image}
          alt="Placeholder Image"
          className="w-full h-48 rounded-md object-cover"
        />
        <div className="px-1 py-4">
          <div className="font-bold text-xl mb-2">
            {props.theme.country}, {props.theme.city}
          </div>
          <p className="text-gray-700 text-base">
            Interested in this recommendation for your journey? Find out more
            and read about the experience of the person
          </p>
        </div>
        <div className="px-1 py-4">
          <div className="w-1/2 px-2">
            <Link to={`/themes/${props.theme._id}/details`}>
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
