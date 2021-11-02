SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (1, N'Sasha Luss')
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (2, N'Claudia Schiffer')
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (3, N'Ola Rudnicka')
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (4, N'Joanna Coops')
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (5, N'Candice Swanepoel')
GO
INSERT [dbo].[Customers] ([CustomerId], [CustomerName]) VALUES (6, N'Nastya Sten')
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[AutoParts] ON 
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (1, N'Eibach', CAST(342.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (2, N'Wheel hub', CAST(12.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (3, N'Arm Bushes', CAST(8.85 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (4, N'Wheel Suspension  ', CAST(4.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (5, N'Wheels 4', CAST(1300.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (6, N'Suspension Arm', CAST(110.48 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (7, N'Stabilizer bushes', CAST(3.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (8, N'Track widening', CAST(12.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (9, N'Alternator', CAST(72.49 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (10, N'Brake Shoe Set ', CAST(65.79 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (11, N'Drum Brakes Front', CAST(122.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (12, N'Anti-roll bar stabiliser kit', CAST(44.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (13, N'Wheel Steering Knuckle Right Front', CAST(72.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[AutoParts] ([AutoPartId], [AutoPartName], [Price]) VALUES (14, N'Engine BMW E60 535i 2007', CAST(5945.04 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[AutoParts] OFF
GO
