import {
  Listbox,
  ListboxItem, Button,
  Card, CardBody, CardFooter, Image,
} from "@nextui-org/react";
import { useState } from "react";

const annotationTypes = {
  nlp: [
    {
      name: "textClassificationEnglish",
      displayName: "Text Classification",
      img: "classification.svg",
    },
    {
      name: "namedEntityRecognitionEnglish",
      displayName: "Named Entity Recognition",
      img: "ner.svg",
    },
    {
      name: "partOfSpeechEnglish",
      displayName: "Part Of Speech Tagging",
      img: "pos.svg",
    },
  ],
  nlpArabic: [
    {
      name: "textClassificationArabic",
      displayName: "Text Classification",
      img: "classification.svg",
    },
    {
      name: "namedEntityRecognitionArabic",
      displayName: "Named Entity Recognition",
      img: "ner.svg",
    },
    {
      name: "partOfSpeechArabic",
      displayName: "Part Of Speech Tagging",
      img: "pos.svg",
    },
  ],
};

export default function AnnotationTypeSelection({
  setShowAnnotationSelectionPage,
  setChosenAnnotationType,
  onClose,
}) {
  const [selectedKeys, setSelectedKeys] = useState(null);
  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-300 p-4">
          <Listbox
            aria-label="Actions"
            onSelectionChange={setSelectedKeys}
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
          >
            <ListboxItem
              startContent={
                (
                  <Image
                    width="30px"
                    height="30px"
                    alt="tabular"
                    src="/images/pos.svg"
                  />
)
}
              key="nlpArabic"
              isSe
            >
              NLP عربي

            </ListboxItem>
            <ListboxItem
              startContent={
                (
                  <Image
                    width="30px"
                    height="30px"
                    alt="tabular"
                    src="/images/pos.svg"
                  />
)
}
              key="nlp"
              isSe
            >
              NLP

            </ListboxItem>
          </Listbox>

        </div>
        <div className="w-3/4 bg-300 p-4">

          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {selectedKeys ? annotationTypes[selectedKeys.currentKey].map((type) => (
              <Card
                shadow="sm"
                isPressable
                onPress={() => {
                  setChosenAnnotationType(type.name);
                  setShowAnnotationSelectionPage(false);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    width="100%"
                    height="auto"
                    alt={type.name}
                    className="w-full h-[120px]"
                    src={`/images/${type.img}`}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{type.displayName}</b>
                </CardFooter>
              </Card>
            )) : (
              <div />
            )}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 right-0 mr-5 mb-5">
        <div className="flex space-x-4">
          <Button
            color="danger"
            variant="light"
            onPress={() => {
              onClose();
            }}
          >
            Cancel
          </Button>

        </div>
      </div>
    </>

  );
}
