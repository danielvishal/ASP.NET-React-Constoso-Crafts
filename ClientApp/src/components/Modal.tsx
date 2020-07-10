import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Rating } from "./Components";

type ProductType = {
  id: number;
  maker: string;
  img: string;
  url: string;
  title: string;
  description: string;
  rating: number[] | null;
};

type ModalType = {
  product: ProductType;
  toggle: (event: React.MouseEvent<MouseEvent>) => void;
  modals: boolean;
};

const ProductModal = (props: ModalType) => {
  const Product = props.product;

  return (
    <div>
      <Modal isOpen={props.modals}>
        <ModalHeader toggle={props.toggle}>{Product?.title}</ModalHeader>
        <ModalBody>
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${Product?.img})`,
              maxHeight: "350px",
            }}
          />
          {Product?.description}
        </ModalBody>
        <ModalFooter>
          {Rating()}
          <Button color="primary" onClick={props.toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductModal;
