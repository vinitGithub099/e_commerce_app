import appIcon from "../assets/shopping_cart.png";

export default function AppLogo() {
  return (
    <div className="flex flex-row items-center">
      <img
        className="w-8 h-8 sm:w-12 sm:h-12 object-cover"
        src={appIcon}
        alt=""
      ></img>
      <h1 className="font-semibold pl-2 text-sm">E-COMMERCE APP</h1>
    </div>
  );
}
