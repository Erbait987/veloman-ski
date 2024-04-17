const baseUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL;

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=-1002126303123&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "что то пошло не так");
  }
};
