const app: Express.Router = {} as any;

app.get((req: Express.Request, res) => {
  const user = req.user;
  res.send(user.firstName);
});

