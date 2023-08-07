---
title: "NedTrain POeMA message broker"
description: "Message broker back-end solution"
url: "https://www.radventure.com/portfolio/nedtrain/"
coverImage: "/nedtrain-poema.png"
startDate: "2019-04-01"
endDate: "2019-12-01"
badge: "RADventure"
tags: [".NET", "ESB", "Microservice", "Web sockets", "SignalR"]
---

I was in charge of developing a message broker back-end solution to take more than **200 messages per second** from an enterprise service bus (ESB), process them, make calculations of the train's location, store them in a SQL server database, and finally notifying **more than 50 web socket suscribers**.

Each subscriber listens different areas of the train tracks and draw each train with the information provided from the broker I developed.

The project was developed in **.NET 5** following the [Mediator pattern](https://refactoring.guru/design-patterns/mediator).
