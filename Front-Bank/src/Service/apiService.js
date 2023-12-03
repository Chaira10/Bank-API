import axios from 'axios';

export async function GetToken(email, password) {
  const url = 'http://localhost:3001/api/v1/user/login';

  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;

    if (data.status === 200) {
      const token = data.body.token;
      return token;
    } else if (data.message === "Error: Password is invalid") {
      document.querySelector('.MsgErrorPass').style.display = "block";
    } else {
      document.querySelector('.MsgErrorName').style.display = "block";
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du token :", error);
    // Gérer l'erreur ici, par exemple en lançant une nouvelle exception ou en retournant null
    throw new Error("Erreur lors de la récupération du token");
  }
}





