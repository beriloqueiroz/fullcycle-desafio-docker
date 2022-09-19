FROM  golang:1.19-alpine as build

WORKDIR /app

RUN go mod init beriloqueiroz/golang

COPY main.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -a -installsuffix cgo -o /handle .

FROM scratch

COPY --from=build /handle /handle

ENTRYPOINT ["/handle"]
