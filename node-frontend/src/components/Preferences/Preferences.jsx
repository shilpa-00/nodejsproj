import React, { useContext, useRef } from "react";
import { UserDetailsContext } from "../../ contexts/UserDetailsContext";
import deleteSvg from "./../../assets/delete.svg";
import TShirtSizes from "../../constants/TShirtSizes";
const Preferences = () => {
  const { userDetails , edit} = useContext(UserDetailsContext);
  const [user, dispatch] = userDetails;
  const sportsRef = useRef();
  const interestRef = useRef();
 
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 mb-10 mt-5">
      <h1 className="text-xl mb-2 mt-2 font-bold">Preferences</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-sm text-zinc-300">T-shirt Size</p>
          <p>
            {edit ? (
              <select
                name="Tshirtsize"
                onChange={(e) => {
                  dispatch({
                    type: "SET_TSHIRT_SIZE",
                    payload: e.target.value,
                  });
                }}
                className="bg-transparent w-10 border rounded-none outline-none"
              >
                {TShirtSizes.map((size, idx) => (
                  <option key={idx} className="text-black" value={size}>
                    {size}
                  </option>
                ))}
              </select>
            ) : (
              <p>{user.tshirtSize}</p>
            )}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-300">Food Preference</p>
          {edit ? (
            <select
              name="food"
              onChange={(e) => {
                dispatch({
                  type: "SET_FOOD_PREFERENCE",
                  payload: e.target.value,
                });
              }}
              className="bg-transparent  border rounded-none outline-none"
            >
              <option value="vegetarian" className="text-black">
                vegetarian
              </option>
              <option value="Non-Vegetarian" className="text-black">
                Non-vegetarian
              </option>
            </select>
          ) : (
            <p>{user.food}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-zinc-300">Sports</p>
          {edit ? (
            <div className="mb-4">
              <input
                type="text"
                className="border-b bg-transparent outline-none"
                placeholder="Add skill"
                ref={sportsRef}
              />
              <button
                className="bg-cyan-200 rounded-sm px-1 ml-5"
                onClick={() => {
                  if (!user?.interests?.includes(interestRef.current.value)) {
                    dispatch({
                      type: "ADD_SPORTS",
                      payload: sportsRef.current.value,
                    });
                    sportsRef.current.value = "";
                  }
                }}
              >
                Add
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap gap-5">
            {user?.sports?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#44475a] p-2 flex justify-center items-center"
              >
                {item}
                {edit ? (
                  <button
                    className="ml-1 text-sm rounded-full p-1 hover:bg-red-500"
                    value={idx}
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_SPORTS",
                        payload: idx,
                      });
                    }}
                  >
                    <img src={deleteSvg} alt="" className="h-4 w-4" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-zinc-300">Interests</p>
          {edit ? (
            <div className="mb-4">
              <input
                type="text"
                className="border-b bg-transparent outline-none"
                placeholder="Add interest"
                ref={interestRef}
              />
              <button
                className="bg-cyan-200 rounded-sm px-1 ml-5"
                onClick={() => {
                  if (!user?.interests?.includes(interestRef.current.value)) {
                    dispatch({
                      type: "ADD_INTEREST",
                      payload: interestRef.current.value,
                    });
                    interestRef.current.value = "";
                  }
                }}
              >
                Add
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap gap-5">
            {user?.interests?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#44475a] p-2 flex justify-center items-center"
              >
                {item}
                {edit ? (
                  <button
                    className="ml-1 text-sm rounded-full p-1 hover:bg-red-500"
                    value={idx}
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_INTEREST",
                        payload: idx,
                      });
                    }}
                  >
                    <img src={deleteSvg} alt="" className="h-4 w-4" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
