import { isEmpty } from "lodash";
import { useState } from "react";
import {
  Badge,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

export const TodoListPage = () => {
  const initialListItems = [
    {
      task: "Wash dishes",
      id: crypto.randomUUID(),
    },
    {
      task: "Clean clothes",
      id: crypto.randomUUID(),
    },
  ];

  const [listItems, setListItems] = useState(initialListItems);
  const [inputValue, setInputValue] = useState("");
  const [currentlyHighlighted, setCurrentlyHighlighted] = useState("");

  const createItem = (itemTask) => {
    const newItemId = crypto.randomUUID();
    const newItems = listItems.concat({
      task: itemTask,
      id: newItemId,
    });
    setListItems(newItems);
  };

  const deleteItem = (itemId) => {
    const filteredItems = listItems.filter((listItem) => {
      return listItem.id !== itemId;
    });
    setListItems(filteredItems);
  };

  const isInputValueValid = () => {
    const isFilled = inputValue;
    const isSemantic = inputValue.replace(/\s/g, "");
    return isFilled && isSemantic;
  };

  const captureEnter = (keyDown) => {
    if (keyDown === "Enter" && isInputValueValid() && listItems.length < 10) {
      createItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <h3>todos:</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-2">
        <Col xs={4}>
          <InputGroup>
            <FormControl
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => captureEnter(e.key)}
              placeholder="Enter new Task"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col xs={4}>
          <ListGroup>
            {!isEmpty(listItems) ? (
              listItems.map((listItem) => {
                return (
                  <ListGroupItem
                    key={listItem.id}
                    className="d-flex justify-content-between align-items-start"
                    onMouseEnter={() => setCurrentlyHighlighted(listItem.id)}
                    onMouseLeave={() => setCurrentlyHighlighted("")}
                  >
                    <div
                      style={{
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {listItem.task}
                    </div>
                    <Badge
                      bg="light"
                      text="dark"
                      onClick={() => deleteItem(listItem.id)}
                      pill
                      style={{
                        cursor: "pointer",
                        visibility:
                          currentlyHighlighted === listItem.id
                            ? "visible"
                            : "hidden",
                        userSelect: "none",
                      }}
                    >
                      X
                    </Badge>
                  </ListGroupItem>
                );
              })
            ) : (
              <ListGroupItem className="d-flex justify-content-between align-items-start">
                <div>No tasks, add a task</div>
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
