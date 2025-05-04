
const apiKey = "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"; // ← استبدل هذا بمفتاحك

async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  if (!prompt) {
    alert("الرجاء كتابة وصف!");
    return;
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      prompt: prompt,
      n: 1,
      size: "512x512"
    })
  });

  const data = await response.json();
  if (data.data && data.data[0]) {
    document.getElementById("image").src = data.data[0].url;
  } else {
    alert("لم يتم العثور على الصورة");
  }
}

function resetImage() {
  document.getElementById("image").src = "";
  document.getElementById("prompt").value = "";
}
