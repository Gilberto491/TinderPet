package com.pet.api.dto.response;

import lombok.Data;

@Data
public class UploadFileResponseDTO {

    private String id;
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
    private long size;
}
