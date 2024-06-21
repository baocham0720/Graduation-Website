import {
  Form,
  Checkbox,
  Input,
  InputNumber,
  type FormProps,
  Select,
  Button,
  message,
  Row,
  Col,
  Upload,
} from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../librarys/AxiosClient";
import { useNavigate } from "react-router-dom";

import globalConfig from "../../constants/config";
import { UploadOutlined } from "@ant-design/icons";
import { AnyObject } from "antd/es/_util/type";

interface DataType {
  _id?: string;
  productName: string;
  category: string;
  brandId: string;
  price: number;
  sort: number;
  isActive: boolean;
  description?: string;
  discount: number;
  stock: number;
  modelYear: number;
  thumbnail?: string;
  slug: string;
  isHome?: boolean;
  createAt: string;
  isHot?: boolean;
  isBest?: boolean;
}

const ProductAddPage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const [updateFormEdit] = Form.useForm();

  const getCategories = async () => {
    return axiosClient.get(`/v1/categories`);
  };
  //Lấy danh sách về
  const queryCategory = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const getBrands = async () => {
    return await axiosClient.get(`/v1/brands?page=1&limit=20`);
  };
  //Lấy danh sách về
  const queryBrand = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  const queryClient = useQueryClient();
  const fetchCreate = async (formData: DataType) => {
    console.log(formData);
    return axiosClient.post("/v1/products", formData);
  };

  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Create success !");
      messageApi.open({
        type: "success",
        content: "Create success !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      //
      updateFormEdit.resetFields();
    },
    onError: () => {
      //khi gọi API bị lỗi
      messageApi.open({
        type: "error",
        content: "Create error !",
      });
    },
  });

  const onFinish: FormProps<DataType>["onFinish"] = (values) => {
    console.log("Success:", values);
    mutationCreate.mutate(values);
  };

  const onFinishFailed: FormProps<DataType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {contextHolder}
      <h1>ProductAddPage</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            navigate("/products");
          }}
        >
          Products List
        </Button>
      </div>
      <Form
        form={updateFormEdit}
        name="create-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<DataType>
          label="Product Name"
          name="productName"
          rules={[
            { required: true, message: "Please input product Name!" },
            { min: 4, message: "Tối thiểu 4 kí tự" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<DataType>
          label="URL SEO"
          name="slug"
          rules={[
            { required: true, message: "Please input product slug!" },
            { min: 4, message: "Tối thiểu 4 kí tự" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<DataType>
          label="Category"
          name="category"
          rules={[
            { required: true, message: "Please input product Category!" },
          ]}
        >
          <Select
            style={{ width: 120 }}
            onChange={() => {}}
            options={
              queryCategory.data &&
              queryCategory.data.data.data.categories.map((c: AnyObject) => {
                return {
                  value: c._id,
                  label: c.categoryName,
                };
              })
            }
          />
        </Form.Item>

        <Form.Item<DataType>
          label="Brand"
          name="brandId"
          rules={[{ required: true, message: "Please input product Brand!" }]}
        >
          <Select
            style={{ width: 120 }}
            onChange={() => {}}
            options={
              queryBrand.data &&
              queryBrand.data.data.data.brands.map((c: AnyObject) => {
                return {
                  value: c._id,
                  label: c.brandName,
                };
              })
            }
          />
        </Form.Item>

        <Form.Item<DataType>
          hasFeedback
          label="Price"
          name="price"
          rules={[
            { required: false, message: "Please Price" },
            {
              type: "number",
              min: 0,
              message: "Tối thiểu phải là 0",
            },
          ]}
        >
          <InputNumber min={0} defaultValue={0} />
        </Form.Item>

        <Form.Item<DataType>
          hasFeedback
          label="Discount"
          name="discount"
          rules={[
            { required: false, message: "Please discount" },
            {
              type: "number",
              min: 0,
              message: "Tối thiểu phải là 0",
            },
          ]}
        >
          <InputNumber min={0} defaultValue={0} />
        </Form.Item>

        <Form.Item<DataType>
          hasFeedback
          label="Quantity"
          name="stock"
          rules={[
            { required: false, message: "Please Stock" },
            {
              type: "number",
              min: 0,
              message: "Tối thiểu phải là 0",
            },
          ]}
        >
          <InputNumber min={0} defaultValue={0} />
        </Form.Item>

        <Form.Item<DataType>
          label="Description"
          name="description"
          rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item<DataType>
          hasFeedback
          label="Sort"
          name="sort"
          rules={[
            { required: false, message: "Please sort" },
            {
              type: "number",
              min: 1,
              message: "Tối thiểu phải là 1",
            },
          ]}
        >
          <InputNumber min={0} defaultValue={50} />
        </Form.Item>

        <Form.Item<DataType> label="Thumbnail" name="thumbnail">
          <Input />
        </Form.Item>
        <Row style={{ margin: "20px 0" }}>
          <Col offset={4}>
            <Upload
              action={`${globalConfig.urlAPI}/v1/upload/single`}
              listType="picture"
              onChange={(file) => {
                console.log(file, file.file.status);
                /** Upload thành công thì cập nhật lại giá trị input thumbnail */
                if (file.file.status === "done") {
                  updateFormEdit.setFieldValue(
                    "thumbnail",
                    file.file.response.data.link
                  );
                }
              }}
              onRemove={(file) => {
                console.log(file);
                /** Khi xóa hình thì clear giá trị khỏi input */
                updateFormEdit.setFieldValue("thumbnail", null);
                /** Đồng thời gọi API xóa link hình trên server, dựa vào đường dẫn */
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Form.Item name="isHome" valuePropName="checked">
            <Checkbox>is Home</Checkbox>
          </Form.Item>

          <Form.Item name="isHot" valuePropName="checked">
            <Checkbox>is Hot</Checkbox>
          </Form.Item>

          <Form.Item name="isBest" valuePropName="checked">
            <Checkbox>is Bet</Checkbox>
          </Form.Item>

          <Form.Item name="isActive" valuePropName="checked">
            <Checkbox checked={true} defaultChecked={true}>
              Enable
            </Checkbox>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={mutationCreate.isPending}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAddPage;