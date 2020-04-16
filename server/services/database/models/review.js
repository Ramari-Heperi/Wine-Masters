module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'review',
    {
      movieid: DataTypes.STRING,
      review: DataTypes.TEXT,
      createdAt: { type: DataTypes.STRING, defaultValue: Date.now() },
    },
    { timestamps: false }
  );
};
