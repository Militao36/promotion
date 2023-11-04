import { useState, useCallback } from "react";
import { formatForMoney, formatForFloat } from "../../../utils/FormatMoney";
export function ModalPromotion() {
  const initialState = {
    id: null,
    product: null,
    valueProduct: "",
    valuePromotion: "",
    startDate: "",
    endDate: "",
  };
  const [payloadPromotion, setPayloadPromotion] = useState(initialState);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setPayloadPromotion({
        ...payloadPromotion,
        [name]:
          name === "valueProduct" || name === "valuePromotion"
            ? formatForFloat(value)
            : value,
      });
    },
    [payloadPromotion]
  );

  return (
    <div
      className="modal fade"
      id="modalPromotion"
      tabIndex="-1"
      aria-labelledby="modalPromotionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalPromotionLabel">
              Registre aqui uma nova promoção
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-product mt-3" style={{}}>
              <div className="mt-2 row">
                <div className=" col-sm-6">
                  <label className="form-label">Selecione seu produto</label>
                  <select className="form-select form-select-sm">
                    <option value="1">Item 1</option>
                    <option value="2">Item 2</option>
                    <option value="3">Item 3</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Valor do produto</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="valueProduct"
                    onChange={handleChange}
                    value={formatForMoney(payloadPromotion.valueProduct)}
                  />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Valor da promoção</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="valuePromotion"
                    onChange={handleChange}
                    value={formatForMoney(payloadPromotion.valuePromotion)}
                  />
                </div>

                <div className="mt-4 col-sm-6">
                  <label className="form-label">Inicio da promoção</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    name="startDate"
                    onChange={handleChange}
                    value={payloadPromotion.startDate}
                  />
                </div>

                <div className="mt-4 col-sm-6">
                  <label className="form-label">Fim da promoção</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    name="endDate"
                    onChange={handleChange}
                    value={payloadPromotion.endDate}
                  />
                </div>
              </div>
              <button className="btn btn-sm btn-success mt-4">Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
