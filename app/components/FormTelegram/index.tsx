"use client";
import React, { FC, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Group, Textarea } from "@mantine/core";
import { sendMessage } from "@/app/api/telegram";
import { notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

import styles from "./formtelegram.module.scss";

export const FormTelegram: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      number: "",
      desc: "",
    },
    validate: {
      name: (value) => (value.trim() !== "" ? null : "Введите ваше имя"),
      number: (value) => (value.trim() !== "" ? null : "Введите ваш номер"),
      desc: (value) => (value.trim() !== "" ? null : "Введите описание"),
    },
  });

  const handleSubmit = async (formData: typeof form.values): Promise<void> => {
    if (Object.values(form.errors).some((error) => error)) {
      return;
    }

    try {
      const message = `ИМЯ: ${formData.name}, НОМЕР: ${formData.number}, ОПИСАНИЕ: ${formData.desc}`;
      await sendMessage(message);

      notifications.show({
        title: "Уведомление",
        message:
          "Ваше сообщение отправлено успешно! Пожалуйста ожидайте звонка!",
      });

      setIsLoading(true);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className={styles.contactTitle}>
          <h3>Контактная форма</h3>
          <h2>Связаться с нами</h2>
        </div>
        <div>
          <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Ваше Имя"
                placeholder="Введите ваше имя"
                {...form.getInputProps("name")}
                error={
                  form.errors.name ? "Поле не должно быть пустым" : undefined
                }
              />
              <TextInput
                mt="md"
                label="Номер"
                placeholder="Введите ваш номер"
                {...form.getInputProps("number")}
                error={
                  form.errors.number ? "Поле не должно быть пустым" : undefined
                }
              />

              <Textarea
                mt="md"
                placeholder="Описание"
                label="Опишите свой вопрос"
                autosize
                minRows={2}
                {...form.getInputProps("desc")}
                error={
                  form.errors.desc ? "Поле не должно быть пустым" : undefined
                }
              />

              <Group justify="center" mt="xl">
                <Button loading={isLoading} type="submit">
                  Отправить
                </Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
};
