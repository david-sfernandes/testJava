import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useAnnotations from "../../hooks/useAnnotations";
import useGroups from "../../hooks/useGroups";
import { colors, fonts } from "../../styles/base";
import BottomSheet from "../BottomSheet";
import Option from "./Option";

type FormProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  annotation: Annotation;
};

export default function AnnotationForm({
  isOpen,
  setOpen,
  annotation,
}: FormProps) {
  const annotations = useAnnotations();
  const [groupList, setGroupList] = useState<Group[]>([]);
  const [showGroups, setshowGroups] = useState(false);
  const groups = useGroups();
  const [height, setHeight] = useState(110);
  const [loading, setLoading] = useState(false);

  const handleShare = () => {
    setshowGroups(true);
    setHeight(240);
    groups
      .getByMembers()
      .then((res) => {
        if (res.status >= 400) return;
        const list: Group[] = res.filter(
          (group: Group) => group.libraryBook.isbn == annotation.bookIsbn
        );
        setGroupList(list);
      })
      .catch((err) => {
        console.log("Error on get groups: ", err);
      });

    groups
      .getByOwner()
      .then((res) => {
        if (res.status >= 400) return;
        const list: Group[] = res.filter(
          (group: Group) => group.libraryBook.isbn == annotation.bookIsbn
        );
        setGroupList((prev) => [...prev, ...list]);
      })
      .catch((err) => {
        console.log("Error on get groups: ", err);
      });
  };

  const handleShareGroup = (groupId: number) => {
    setLoading(true);
    groups
      .addAnnotation(groupId, annotation.id)
      .then((res) => {
        console.log(res);
        if (res.status >= 400) return;
        setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} height={height}>
      {showGroups ? (
        <>
          <Text style={[fonts.h4, { marginBottom: 8 }]}>
            Escolha o grupos para compartilhar
          </Text>
          {groupList.length == 0 && (
            <Text style={fonts.default}>Nenhum grupo encontrado</Text>
          )}
          <ScrollView horizontal style={styles.slider}>
            {groupList.map((group) => (
              <TouchableOpacity
                onPress={() => handleShareGroup(group.id)}
                key={"group" + group.id}
                style={{ alignItems: "center" }}
                disabled={loading}
              >
                <Image
                  source={{ uri: group.libraryBook.book.cover }}
                  style={styles.img}
                />
                <Text style={styles.groupText}>Criado por:</Text>
                <Text style={styles.groupText}>{group.owner}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Option
            text="Cancelar"
            color={colors.red}
            onPress={() => {
              setshowGroups(false);
              setHeight(120);
            }}
          />
          <View style={{ height: 10 }} />
        </>
      ) : (
        <>
          <Option text="Compartilhar com grupo" onPress={handleShare} />
          <Option
            text="Excluir"
            color={colors.red}
            onPress={() => annotations.deleteAnnotation(annotation.id)}
          />
        </>
      )}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  slider: {
    gap: 8,
  },
  img: {
    width: 70,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.semiTransparent,
    marginBottom: 4,
  },
  groupText: {
    textAlign: "center",
    margin: 0,
    padding: 0,
    color: colors.semiTransparent,
    fontSize: 9,
  },
});
