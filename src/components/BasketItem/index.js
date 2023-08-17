import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { addToBasket, addToQuantity, deleteCart } from "../../redux/Actions";
import { useDispatch } from "react-redux";
const BasketItem = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {el.title}
          </th>
          <td className="px-6 py-4">
            <img src={el.image} width={"130px"} alt="" />
          </td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              <button>
                <ImMinus onClick={() => dispatch(addToQuantity(el))} />
              </button>
              {el.quantity}
              <button>
                <ImPlus onClick={() => dispatch(addToBasket(el))} />
              </button>
            </div>
          </td>
          <td className="px-6 py-4">${el.price * el.quantity}</td>
          <td className="px-6 py-4">
            <button onClick={() => dispatch(deleteCart(el))}>DELETE</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default BasketItem;
