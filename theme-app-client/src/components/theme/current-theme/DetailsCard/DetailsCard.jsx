function DetailsCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img
              className="w-full h-full object-cover"
              src={props.theme.image}
              alt="Product Image"
            />
          </div>
        </div>

        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {props.theme.country}, {props.theme.city}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {props.theme.genre}
          </p>

          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Vacation Review:
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {props.theme.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
