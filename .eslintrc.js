module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Aturan khusus lainnya jika diperlukan
  },
};
