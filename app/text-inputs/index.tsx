import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeTextInput from "@/presentation/shared/ThemeTextInput";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemeView margin>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemeCard>

          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Correo Electronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemeCard>

          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-3">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard style={{ marginBottom: isIOS ? 100 : 30 }}>
            <ThemeTextInput
              placeholder="Telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>
        </ThemeView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
