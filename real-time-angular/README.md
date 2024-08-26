# RealTimeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Development Server

To start the development server, run the following command in your terminal:

```bash
ng serve
```

Then, navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you make any changes to the source files.

## Updating `environment.ts`

To integrate with the backend, you need to update the `environment.ts` file with the relevant backend port number. Here's how:

1. Navigate to the `src/environments/` folder.
2. Open the `environment.ts` file.
3. Update the API endpoint or backend URL with the correct port number.

For example:

```typescript
export const environment = {
  hubUrl: 'https://localhost:7138/chatHub'  // Update this with your backend URL and port
};
```

## Running the Project

After updating the `environment.ts` file, run the project using `ng serve` as described above.

**Note:** To see real-time broadcasting in action, open multiple tabs in your browser and navigate to `http://localhost:4200/` in each tab. This will allow you to observe how messages are broadcast to all connected clients.

## Additional Recommendations

- **Installing Dependencies:** Make sure you have installed all the necessary dependencies by running:

  ```bash
  npm install
  ```

- **Further Reading:** For more details on using SignalR with Angular, check out the [official documentation](https://docs.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-5.0).
