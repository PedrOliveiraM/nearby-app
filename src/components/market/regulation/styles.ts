import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    fontSize: 16,
    paddingBottom: 12,
  },
  containerRules: {
    gap: 4, // Espaçamento entre as regras
  },
  ruleItem: {
    flexDirection: 'row', // Coloca bolinha e texto lado a lado
    alignItems: 'center', // Centraliza verticalmente
  },
  bullet: {
    width: 5, // Tamanho da bolinha
    height: 5, // Tamanho da bolinha
    borderRadius: 4, // Torna a bolinha redonda
    backgroundColor: colors.gray[400], // Cor da bolinha
    marginRight: 8, // Espaço entre a bolinha e o texto
    padding: 2
  },
  description: {
    color: colors.gray[500], // Cor do texto
    fontFamily: fontFamily.regular, // Fonte do texto
    fontSize: 14, // Tamanho do texto
  },
});
