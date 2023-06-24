// ["Too Short", "Weak", "Fair", "Good", "Strong"];

import { useEffect } from "react";

// const strengthMap = [
//   {
//     strength: "Short",
//     color: "gray",
//   },
//   {
//     strength: "Weak",
//     color: "red-5",
//   },
//   {
//     strength: "Fair",
//     color: "orange-5",
//   },
//   {
//     strength: "Good",
//     color: "green-5",
//   },
//   {
//     strength: "Strong",
//     color: "blue-5",
//   },
// ];

const calculatePasswordStrength = (password) => {
  // Calculate the strength of the password based on your criteria
  // You can define your own rules for password strength calculation

  let strength = "None";

  if (password.length >= 8) {
    strength = "weak";
  }

  if (/\d/.test(password)) {
    strength = "fair";
  }

  if (/[A-Z]/.test(password)) {
    strength = "strong";
  }

  return strength;
};

const getPasswordStrengthColor = (password) => {
  const strength = calculatePasswordStrength(password ? password : "");
  let color = "";
  switch (strength) {
    case "weak":
      color = "red-5";
      break;
    case "fair":
      color = "green-5";
      break;
    case "strong":
      color = "blue-5";
      break;
    default:
      color = "gray";
  }

  return { color, strength };
};

export default function PasswordStrengthIndicator({ password }) {
  const { color, strength } = getPasswordStrengthColor(password);

  useEffect(() => {}, [password]);

  return (
    <div className="mb-6 flex flex-row items-center justify-end">
      <p className={`text-${color} mx-2`}>{strength}</p>
      <div className={`border w-20 h-4 bg-${color}`}></div>
    </div>
  );
}
